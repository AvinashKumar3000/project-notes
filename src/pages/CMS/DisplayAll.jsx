import { useContext } from 'react'
import StorageContext from '../../context/StorageContext';
import Card from '../../components/cms/Card';

export default function DisplayAll() {
    const { items } = useContext(StorageContext); // Access function from context

    return (
        <div className="flex flex-wrap gap-5">
            {
                items.map((value, index) => {
                    return (
                       <Card key={index} item={value} index={index}/>
                    )
                })
            }
        </div>
    );
}
