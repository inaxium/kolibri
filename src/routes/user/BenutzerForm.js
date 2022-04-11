import React, { useState, useEffect } from 'react'
import {Button as OriginButton, Form, TextInput} from "carbon-components-react";
import {IdIP, EmailIP, KennungIP, NachnameIP, TelefonnummerIP, VornameIP} from "./BenutzerMeta";
import styled from 'styled-components'

const Button = styled(OriginButton)`
  margin-top: 20px;
`;

const BenutzerForm = props => {
    const [ user, setUser ] = useState(props.currentUser),
    hic = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    useEffect(
        () => {
            console.log(props.currentUser);
            setUser(props.currentUser)
        },[ props ]
    );

    return (
        <>
            <Form onSubmit={event => {
                event.preventDefault()
                props.updateUser(user.id, user)
            }}>
                <TextInput {...IdIP} onChange={hic} defaultValue={user.id} disabled/>
                <TextInput {...KennungIP} onChange={hic} defaultValue={user.benutzerkennung} />
                <TextInput {...VornameIP} onChange={hic} defaultValue={user.vorname} />
                <TextInput {...NachnameIP} onChange={hic} defaultValue={user.nachname} />
                <TextInput {...EmailIP} onChange={hic} defaultValue={user.email} />
                <TextInput {...TelefonnummerIP} onChange={hic} defaultValue={user.telefonnummer} />
                <Button id="save" type="submit">Speichern</Button>
            </Form>
        </>
    )
}

export default BenutzerForm