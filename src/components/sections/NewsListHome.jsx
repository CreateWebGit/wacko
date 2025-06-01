import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import Image from 'next/image'

export default async function NewsListHome() {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const posts = await payload.find({
        collection: 'news',
        locale: 'sv',
        limit: 3
    })

    const urlFormatter = (url) => {
        url = url.replace(/\s+/g, '-').toLowerCase()
        return url
    }

    console.log(posts)

    return (
        <section className="cw-section--newslisthome cw-grid gap-2 py-5">
            <div className="cw-col-12 cw-col-xs-12">
                <h1 className="h2 text-accent text-center">Senaste nytt från Wacko</h1>
                <p className="text-center mt-2">Vill du vara först med att veta när nya kollektioner landar i butik? Eller när vi fyller på lagret med <br/> efterfrågade modeller? Här delar vi nyheter, lanseringar, events och annat du inte vill missa.</p>
            </div>
            {posts.docs.map((post) => (
                <Link className="cw-col-4 cw-col-xs-12 news-item mt-2" href={{pathname: '/nyheter/' + urlFormatter(post.title)}} key={post.title} >
                    <div className="image-container">
                        <Image alt={post.title} src={post.images[0].url} width={373 * 2} height={199 * 2}/>
                    </div>
                    <div className="text-container">
                        <div className="title-container">
                            <h1 className="h3">{post.title}</h1>
                        </div>
                        <div className="ingress-container">
                            <p>{post.ingress}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </section>
    )
}