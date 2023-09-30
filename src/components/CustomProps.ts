export type ProfileProps = {
    email: string
    family_name: string
    given_name: string
    hd: string
    id: string
    locale: string
    name: string
    picture: string
    verified_email: boolean
}

export type CheckLoginProps = {
    open: boolean
    handleClose: () => void
    profile: ProfileProps | undefined
}

export type ThemeProp = {
    children: React.ReactNode
}

export type LoginProps = {
    children: React.ReactNode
    open: boolean
    handleClose: () => void
}

export type FilmProps = {
    id: number
    img: string
    name: string
    cost: number
    userID: string[]
    dt: string[]
    clip: string
    info: string
    filmURL: string
}

export type FilmDetailProps = {
    film: FilmProps | undefined
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type color = 'dark' | 'red' | 'white'
type theme = 'Theme'

export type TrailerModalProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    film: FilmProps | undefined
    // className: `${color}${theme}` //Template literals
    className: Exclude<`${color}${theme}`, 'redTheme'> //Template literals with Exclude(Ngoại trừ)

}

export type CustomTabPanelProps = {
    children: React.ReactNode
    value: number
    index: number
}

export type FormProps = {
    name: string,
    phone: string
    email: string
    suggestion: string
}

export type FormCustomProps = {
    children: React.ReactNode
}

export type ListfilmProps<FilmType, FavoType> = { //Generic Type
    films: FilmType
    favoFilms: FavoType
    setFavo: React.Dispatch<React.SetStateAction<string[]>>
    handleOpenDialog: () => void
    openDialog: boolean
    handleCloseDialog: () => void
}

export type TextFieldType = {
    isVerified: boolean | undefined
}

export type Email = TextFieldType & {
    email: string | undefined
    givenName?: never
}

export type GivenName = TextFieldType & {
    givenName: string | undefined
    email?: never
}

export type TextFieldProps = Email | GivenName //Restrict Props(Có prop này thì ko dc có prop kia => truyền name rồi thì k dc truyền thêm email)