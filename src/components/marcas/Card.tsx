'use client';
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/scss/marca.module.scss';
interface LogoSrcProps {
    logosrc: string;
    slug: string;
}
const Card = ({ logosrc, slug }: LogoSrcProps) => {
    return (
        <Link href={`/${slug}`} className={styles.btnMarca}>
            <Image src={logosrc} width={300} height={300} alt="Gloria" />
        </Link>
    )
}

export default Card
