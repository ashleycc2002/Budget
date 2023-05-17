export interface  ResponseContacto {
    _id:              string;
    User_id?:          string;
    nombre:           string;
    apellidos?:        string;
    correo:           string;
    direccion?:       string;
    pais?:             string;
    fechadeCumpleano?: Date;
    telefono1?:        string;
    telefono2?:        string;
    profesion?:        string;
    lenguage?:         string;
    redSociales?:      RedSociales;
}

export interface RedSociales {
    facebook:  Facebook;
    whasapp:   Whasapp;
    linkedin:  Linkedin;
    instagram: Instagram;
    twitter:   Twitter;
    snapchat:  Snapchat;
}

export interface Facebook {
    facebook:    boolean;
    txtfacebook: string;
}

export interface Instagram {
    instagram:    boolean;
    txtinstagram: string;
}

export interface Linkedin {
    linkedin:    boolean;
    txtlinkedin: string;
}

export interface Snapchat {
    snapchat:    boolean;
    txtsnapchat: string;
}

export interface Twitter {
    twitter:    boolean;
    txttwitter: string;
}

export interface Whasapp {
    whasapp:    boolean;
    txtwhasapp: string;
}




