import React from 'react'
import Link from 'next/link'
import styles from '../static/Home.module.css'

export const TableList = ({ items, columns, routingPath }) => {
    return (
        <table className={styles.table}>
            <tr>
                {columns.map((column) => (
                    <th key={column}>{column}</th>
                ))}
            </tr>
            {items.map((item) => {
                return (
                    <tr key={item._id}>
                        {columns.map((column) => (
                            <td key={column}>
                                <Link href={`/${routingPath}/${item._id}`}>
                                    {item[column]}
                                </Link>
                            </td>
                        ))}
                    </tr>
                )
            })}
        </table>
    )
}
