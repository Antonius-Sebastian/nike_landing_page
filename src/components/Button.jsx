/* eslint-disable react/prop-types */
const Button = ({
    label,
    icon,
    backgroundColor = 'bg-coral-red',
    borderColor = 'border-coral-red',
    textColor = 'text-white',
    fullWidth,
}) => {
    return (
        <button
            className={`flex justify-center items-center border gap-2 px-7 py-4 font-montserrat text-lg leading-none
                    ${backgroundColor} rounded-full ${textColor} ${borderColor} ${
                fullWidth && 'w-full'
            }`}
        >
            {label}
            {icon && (
                <img
                    src={icon}
                    alt="Button icon"
                    className="ml-2 rounded-full w-5 h-5"
                />
            )}
        </button>
    )
}

export default Button
