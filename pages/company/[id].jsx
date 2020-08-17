import { useRouter } from 'next/router'

const data = [
    { id: '1', name: 'Github' },
    { id: '2', name: 'Apple' },
    { id: '3', name: 'JavaScript' },
];


const SingleCompany = ({ company }) => {

    const { isFallback } = useRouter();


    // loading 3rd company dynamically and rest of them statically
    if(isFallback){
        return <h1>Fallback Loading...</h1>
    }

    return (
        <div>
            { company.name }
        </div>
    )
}

export default SingleCompany

export const getStaticPaths = async () => {

    const paths = data.map(({ id }) => {
        return { params: { id } };
    });

    paths.splice(2, 1);

    return {
        paths,
        fallback: true, // every page static ? false
    }
}

// runs once per company, in PROD
export const getStaticProps = ({ params: { id } }) => {
    const company = data.find(company => company.id === id);

    return { props: { company } }
}