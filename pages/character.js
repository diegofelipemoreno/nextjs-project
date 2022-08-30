// Framework dependencies
import React, { useEffect, useState } from "react";
import Head from 'next/head';
import { useDispatch, useSelector } from "react-redux";

// Local dependencies
import Layout from '../components/layout';
import Form from '../components/form';
import Input from '../components/input';
import CardGallery from '../components/card-gallery';
import style from '../styles/views/Character.module.scss';
import {requestUtil} from '../lib/utils';
import {CHARACTER_FORM, CHARACTER_PAGE_TITLE} from '../constants';
import { setSearchState, getSearchState } from '../reducers/searchSlice';

export default function Character() {
    const [isValidForm, setIsValidForm] = useState(false);
    const [results, setResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [fieldsDict, setFieldsDict] = useState(CHARACTER_FORM.FIELDS);
    const searchState = useSelector(getSearchState);
    const dispatch = useDispatch();

    const fetchData = async(query) => {
        const {body} = 
            await requestUtil(`/api/character?name=${query}`).then((res) => res);
        const bodyResponse = await body;
        const results = bodyResponse?.length ? bodyResponse : [];

        setResults(results);
        dispatch(setSearchState({query, results }));
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (isValidForm) {
            const query = fieldsDict.character.value;

            setSearchValue(query);       
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

    useEffect(() => {
        const {search} = searchState;

        if (search && search?.query) {
            setResults(search.results);
            setSearchValue(search.query);
        }
    }, [searchState]);

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
                    title={`${searchValue} results`}
                    results={results}
                    />
                </div>
            </section>
        </Layout>
      );
}