'use client'

import React from 'react'
import { useField, useFormFields } from '@payloadcms/ui'

type SubcategoryOption = { label: string; value: string }
type CategoryKey = 'herr' | 'dam' | 'accessoarer' | 'vinterdetaljer' | 'vaskor'

const subcategoryOptions: Record<CategoryKey, SubcategoryOption[]> = {
    herr: [
        { label: 'Jackor', value: 'jackor' },
        { label: 'Skinnväst', value: 'skinnväst' },
        { label: 'Skinnbyxor', value: 'skinnbyxor' },
        { label: 'Handskar', value: 'handskar' },
        { label: 'Bälten', value: 'bälten' },
        { label: 'Plånböcker', value: 'plånböcker' },
        { label: 'Hattar', value: 'hattar' },
        { label: 'Kepsar', value: 'kepsar' }
    ],
    dam: [
        { label: 'Jackor', value: 'jackor' },
        { label: 'Västar', value: 'västar' },
        { label: 'Skinnbyxor', value: 'skinnbyxor' },
        { label: 'Handskar', value: 'handskar' },
        { label: 'Bälten', value: 'bälten' },
        { label: 'Plånböcker', value: 'plånböcker' }
    ],
    accessoarer: [
        { label: 'Halsdukar', value: 'halsdukar' },
        { label: 'Bälten', value: 'bälten' },
        { label: 'Necessär', value: 'necessar' },
        { label: 'Plånböcker', value: 'plånböcker' },
        { label: 'Nyckelfodral', value: 'nyckelfodral' },
        { label: 'Korthållare', value: 'korthållare' },
        { label: 'Tofflor', value: 'tofflor' }
    ],
    vinterdetaljer: [
        { label: 'Mössor', value: 'mössor' },
        { label: 'Handskar', value: 'handskar' },
        { label: 'Halsdukar', value: 'halsdukar' }
    ],
    vaskor: [
        { label: 'Handväskor', value: 'handväskor' },
        { label: 'Resväskor', value: 'resväskor' },
        { label: 'Ryggväskor', value: 'ryggväskor' },
        { label: 'Weekendväskor', value: 'weekendväskor' },
        { label: 'Magväskor', value: 'magväskor' }
    ]
}

const isCategoryKey = (value: string): value is CategoryKey => value in subcategoryOptions

const DynamicSubcategory: React.FC = () => {
    //vi hämtar den nuvarande kategorin som är vald
    const category = useFormFields<string | undefined>(
        React.useCallback(([fields]) => {
            const field = fields?.['categories'] as { value?: unknown } | undefined

            return typeof field?.value === 'string' ? field.value : undefined
        }, [])
    )

    //här hämtar vi subcategory fältet, så att vi kan manipulera det
    const { value, setValue } = useField<string | null>({
        path: 'subCategory'
    })

    //här populerar vi options i subcategory fältet baserat på vilken
    //kategori som är vald
    const options: SubcategoryOption[] =
        category && isCategoryKey(category) ? subcategoryOptions[category] : []

    //escape om inget finns
    if (!category || options.length === 0) {
        return null
    }

    return (
        <div className="field-type">
            <label htmlFor="subCategory" style={{ display: 'block', marginBottom: '0.25rem' }}>
                Underkategori
            </label>
            <select
                id="subCategory"
                value={value || ''}
                onChange={(e) => setValue(e.target.value)}
                style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid var(--theme-elevation-200)'
                }}
            >
                <option value="">Välj underkategori...</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default DynamicSubcategory
