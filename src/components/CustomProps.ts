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

export type TrailerModalProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    film: FilmProps | undefined
    dark: boolean

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
    openDiaglog: boolean
    handleCloseDialog: () => void
}