// # +====================================================================================+ #
// # |===============================     Powerk-soft     ================================| #
// # |==============================    e-commerce app     ===============================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

import React from 'react'

import './search_bar.scss'
import InputText from '../InputText/InputText'
import Button from '../Button/Button'
import { Option, Select, selectClasses }from '@mui/joy';
import { KeyboardArrowDown, Search } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const SearchBar = ({withFilter, width, text=null, icon=null}) => {
    //State for translation
    const {t,i18n} = useTranslation();

    const filters = [t('town'),t('brand'),t('carType')];

    return (
        <div className='search-bar' style={{width:width}}>
            <InputText type="text" name='email' value={'test@gmail.com'} handler={() => console.log('TODO')} />
            <div className="options">
                {
                    withFilter &&
                    <Select
                        placeholder={t('searchBy')}
                        indicator={<KeyboardArrowDown />}
                        sx={{
                            [`& .${selectClasses.indicator}`]: {
                            transition: '0.2s',
                            [`&.${selectClasses.expanded}`]: {
                                transform: 'rotate(-180deg)',
                            },
                            },
                        }}
                        >

                        {
                            filters.map((elt, i) => {
                                return (
                                    <Option value={elt} key={i} >{elt}</Option>
                                )
                            })
                        }
                    </Select>
                }

                <Button text={text} icon={icon} />
            </div>
        </div>
    )
}

export default SearchBar