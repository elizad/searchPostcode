import { FC, ChangeEvent } from 'react';

const alphaOnlyRegex = /^\D*$/
const numbersOnlyRegex = /^[\d\s]+$/

// alpha only means no numbers allowed
// numbers only means only numbers and spaces allowed
type charType = "alphaOnly" | "numbersOnly"

interface InputValidation {
    maxChars?: number
    type?: charType
}

interface IFormInputProps {
    name: string
    title: string
    value: string
    placeholder: string
    onChange: (newValue: string) => void
    validation?: InputValidation
}

export const FormInput: FC<IFormInputProps> = ({ name, title, value, placeholder, onChange, validation }) => {

    const _changeEvent = (_evnt: ChangeEvent<HTMLInputElement>) => {

        const newValue: string = _evnt.target.value
        if (!validation) {
            onChange(newValue)
            return
        }

        if (typeof validation.maxChars === 'number' && newValue.length > validation.maxChars) {
            onChange(newValue.substr(0, validation.maxChars))
            return
        }

        if (validation.type === 'alphaOnly' && !alphaOnlyRegex.test(newValue)) {
            // no numbers allowed
            return
        }

        if (validation.type === 'numbersOnly' && !numbersOnlyRegex.test(newValue)) {
            // only numbers and spaces allowed
            return
        }

        onChange(newValue)
    }

    return <input
        type="text"
        name={name}
        title={title}
        value={value}
        placeholder={placeholder}
        onChange={_changeEvent}
    />
}

// by default we will limit chars to 100 char limit
FormInput.defaultProps = {
    validation: {
        maxChars: 100
    }
}
