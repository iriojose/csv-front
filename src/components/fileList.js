import { ListGroup } from 'react-bootstrap';

function FileList(props) {
    return (
        <>
            <h4>File list</h4>
			<ListGroup>
				{props.list.length > 0 && props.list.map(item => {
					return <ListGroup.Item>{item}</ListGroup.Item>
				})}
			</ListGroup>
        </>
    )
}

export default FileList;