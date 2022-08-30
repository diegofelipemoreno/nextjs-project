// Framework dependencies
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';

// Local dependencies
import Button from './button';
import styles from '../styles/components/Login.module.scss';
import {NOT_SIGN_TEXT, SIGN_OUT, SIGN_IN} from '../constants';

export default function Login() {
    const { data: session } = useSession();
    const name = session?.user?.name || '';
    const image = session?.user?.image || '';
    const email = session?.user?.email || '';

    return (
        <div className={styles.login}>
            {!session && (
                <>
                    <p>{NOT_SIGN_TEXT}</p>
                    <Button
                    label={SIGN_IN}
                    onClick={() => signIn()}
                    />
                </>
            )}

            {session && (
                <>
                    <div className={styles.login__masthead}>
                        <p>{email}</p>
                        {image && (
                            <div   className={styles.login__img}>
                            <Image
                            src={image}
                            alt={name}
                            width={80}
                            height={80}
                            />
                            </div>
                        )}
                    </div>
                    <Button
                    label={SIGN_OUT}
                    onClick={() => signOut()}
                    />
                </>
            )}
        </div>
    )
};

