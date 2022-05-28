import React, { useEffect, useState } from 'react'
import {getAllCSV, getCSVList} from '../api/index';
import MainTable from './mainTable';
import Loader from './loader';
import FileList from './fileList';
import NotFound from './notFound';
import { useSelector } from 'react-redux';
import '../index.css';

function Main() {
	const [data, setData] = useState([]);
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(true);
	const search = useSelector((state) => state.search.search);

	useEffect(() => {
		setLoading(true);
		getcsv(search);
		getCSVList().then(res => {
			setList(res.files);
		});
	}, []);

	useEffect(() => {
		setLoading(true);
		getcsv(search);
	},[search])

	

	const getcsv = (text = '') => {
		getAllCSV(text).then(res => {
			console.log(res);
			setData(res.files);
		}).finally(() => {
			setLoading(false);
		});
	}

	const columns = ['File Name','Text','Number','Hex'];

	if(loading) {
		return <Loader></Loader>
	}

	if(!loading && data.length <= 0) {
		return <NotFound></NotFound>
	}

	return (
		<div className='container-stretch'>
			<div style={{flex:9}}>
				<MainTable columns={columns} data={data}></MainTable>
			</div>
			<div style={{flex:1}}></div>
			<div style={{flex:2, justifyContent:"center", alignItems:"center"}}>
				<FileList list={list}></FileList>
			</div>
		</div>
	);
}

export default Main;
