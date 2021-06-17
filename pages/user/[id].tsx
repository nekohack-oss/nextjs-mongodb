import React from 'react'
import { GetServerSideProps } from 'next'

import Endpoints from '../../lib/endpoints.constants'

type User = {
    _id: string
    name: string
}

type Props = {
    item?: User
    errors?: string
}

export default function User({ item, errors }: Props) {
    if (errors) {
        return (
            <main>
                <p>{errors}</p>
            </main>
        )
    }

    return (
        <main>
            {item && (
                <>
                    <h1>User Detail</h1>
                    <p>{item._id}</p>
                    <p>{item.name}</p>
                </>
            )}
        </main>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    try {
        const id = params?.id
        const response = await fetch(Endpoints.USER_API)
        const json = await response.json()
        const item = json.find((data) => data._id === id)
        return { props: { item } }
    } catch (err) {
        return { props: { errors: err.message } }
    }
}
