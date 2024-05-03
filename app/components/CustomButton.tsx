interface CustomButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    className,
    onClick
}) => {
    return (
        <div className={`max-w-[1500px] justify-normal py-4 px-6 inline-block bg-airbnb hover:bg-airbnb-dark text-white rounded-xl ${className}`}
            onClick={onClick}>
            {label}
        </div>
    )
}

export default CustomButton