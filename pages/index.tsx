import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { TableList } from '../components/TableList'

import Endpoints from '../lib/endpoints.constants'

type User = {
    _id: string
    name: string
}

type Props = {
    items: User[]
}

export default function Home({ items }: Props) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Users</h1>

                <TableList
                    items={items}
                    columns={['_id', 'name']}
                    routingPath="user"
                />
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch(Endpoints.USER_API)
    const json = await response.json()
    return { props: { items: json } }
}
