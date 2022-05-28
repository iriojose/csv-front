import {Navbar, Container, Form, FormControl} from 'react-bootstrap'
import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch as setSearchDispatch} from '../actions/actions';
import { connect } from 'react-redux'
import { useDebouncedCallback } from 'use-debounce';

function Header() {
    const [search, setSearch] = useState(useSelector((state) => state.search.search));
    const dispatch = useDispatch()

    const hanldeSearch = (text) => {
        debounced(text)
        setSearch(text);
    };

    const debounced = useDebouncedCallback(
		(value) => {
            dispatch(setSearchDispatch(value));
        },
		1000
	);
    
	return (
		<Navbar bg="primary" expand="lg">
            <Container fluid>
                <Navbar.Brand style={{color:'white'}} href="#">CSV TEST</Navbar.Brand>
                 
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        value={search}
                        aria-label="Search"
                        onChange={e => hanldeSearch(e.target.value)}
                    />
                </Form>
            </Container>
        </Navbar>
	);
}


export default connect(null,{setSearchDispatch})(Header);
