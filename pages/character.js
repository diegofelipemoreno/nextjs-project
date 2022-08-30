// Framework dependencies
import React, { useState } from "react";
import Head from 'next/head';

// Local dependencies
import Layout from '../components/layout';
import Form from '../components/form';
import Input from '../components/input';
import CardGallery from '../components/card-gallery';
import style from '../styles/views/Character.module.scss';
import {requestUtil} from '../lib/utils';
import {CHARACTER_FORM, CHARACTER_PAGE_TITLE} from '../constants';

export default function Character() {
    const [isValidForm, setIsValidForm] = useState(true);
    const [results, setResults] = useState([]);
    const [fieldsDict, setFieldsDict] = useState(CHARACTER_FORM.FIELDS);

    const fetchData = async(query) => {
        const {statusCode, body} = 
            await requestUtil(`/api/character?name=${query}`).then((res) => res);

        if (statusCode === 200) {
            setResults(await body);
        } else {
            setResults([]);
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (isValidForm) {
            const query = fieldsDict.character.value;

            fetchData(query);  
        }
    }

    const fieldsValidation = (id, value, isValid) => {
        const currentField = fieldsDict[id];

        if (!currentField) {
            return;
        }

        setIsValidForm(isValid);
        setFieldsDict({
            ...fieldsDict,
            [id]: {
                ...currentField,
                value,
            }
        });
    }

    return (
        <Layout>
            <Head>
                <title>{CHARACTER_PAGE_TITLE}</title>
            </Head>
            <section className={`grid ${style.character}`}>
                <div className={style.character__formWrapper}>
                    <Form
                    id={CHARACTER_FORM.ID}
                    title={CHARACTER_FORM.TITLE}
                    onSubmitListener={(event) => onSubmit(event)}
                    submitDisabled={!isValidForm}
                    >
                        <Input
                        label={fieldsDict.character.label}
                        id={fieldsDict.character.id}
                        value={fieldsDict.character.value}
                        required={fieldsDict.character.required}
                        errorMsg={fieldsDict.character.errorMsg}
                        onChangeListener={fieldsValidation}
                        />
                    </Form>
                </div>
                <div className={style.character__galleryWrapper}>
                    <CardGallery
                    results={results}
                    />
                </div>
            </section>
        </Layout>
      );
}