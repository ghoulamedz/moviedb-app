import React, { useState, useRef, useEffect } from "react"
//Image
import SearchIcon from "../../images/search-icon.svg"
//Styles
import { Wrapper, Content } from "./SearchBar.styles"

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState("");
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)
        return () => clearTimeout(timer)
    }, [setSearchTerm, state])
    return (
        <Wrapper>
            <Content>
                <img src={SearchIcon} alt='search-icon' />
                <input
                    type='text'
                    placeholder='Search Movie'
                    onChange={e => setState(e.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}