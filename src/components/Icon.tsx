interface IconProps{
    icon:string,
    alt:string
}
export default function Icon(props:IconProps){
    const {icon,alt} = props
    return (
        <div className="bg-white w-20 gap-1 aspect-square rounded-full flex items-center justify-center last:mr-4 flex-col">
            <img src={icon} alt={alt} className="w-7 aspect-square object-contain rounded" />
            <h5 className="capitalize text-xs font-bold">{alt}</h5>
        </div>
    )
}

