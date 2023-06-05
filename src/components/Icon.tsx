interface IconProps{
    icon:string,
    alt:string
}
export default function Icon(props:IconProps){
    const {icon,alt} = props
    return (
        <div className="bg-white rounded-full p-4 last:mr-4">
            <img src={icon} alt={alt} className="w-10 h-10 object-contain rounded" loading="lazy" decoding="async" />
        </div>
    )
}

