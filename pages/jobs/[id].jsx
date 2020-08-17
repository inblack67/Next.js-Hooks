const data = [
    { id: '1', title: 'React Developer' },
    { id: '2', title: 'Node Developer' },
    { id: '3', title: 'JavaScript Developer' },
];

const SingleJob = ({ job: { title } }) => {

    return (
        <div>
            <h1>
                { title }
            </h1>
        </div>
    )
}

export default SingleJob

// runs only in server env
export const getServerSideProps = ({ query: { id }, res }) => {
    const job = data.find(job => job.id === id);
    if(!job){
        // status code matters for redirect
        res.writeHead(302, { Location: '/' });
        res.end();
        return {props: {}};
    }
    return { props: { job } };
}