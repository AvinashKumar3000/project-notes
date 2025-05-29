import { useContext } from 'react'
import StorageContext from '../../context/StorageContext';
import Card from '../../components/cms/Card';

export default function DisplayAll() {
    const { items } = useContext(StorageContext); // Access function from context

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
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
