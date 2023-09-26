// type iframeProps = {
//     frameBorder?: string
// } & Omit<React.ComponentProps<'iframe'>, 'frameBorder'>
type iframeProps = {
    frameBorder: string
} & Omit<React.ComponentProps<'iframe'>, 'frameBorder'> //Omit loại bỏ property frameBorder của tag iframe => dùng props frameBorder kiểu string
export default function CustomIframe({ frameBorder, ...rest }: iframeProps) {
    return (
        <iframe frameBorder={frameBorder} {...rest} />
    )
}
