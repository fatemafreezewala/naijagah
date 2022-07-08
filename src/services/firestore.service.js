import {db} from '../firebase'
import {collection, addDoc, Timestamp,onSnapshot,getDoc,query,getDocs,where} from 'firebase/firestore'


    const savedPropertcollection = collection(db, 'savedProperty');
    const addSavedProperty = async (data) => {
        // e.preventDefault()
 
        try { 
          await addDoc(savedPropertcollection, {
            property_id: data.property_id,
            user_id: data.user_id, 
            created: Timestamp.now() 
          })
          //onClose()
        } catch (err) {
          alert(err)
        }
    }
    const ifSavedProperty = async(data)=>{
        alert('called')
        const q = query(savedPropertcollection, where("user_id", "==", data.property_id)).where("property_id",'==',data.user_id);

        const querySnapshot = await getDocs(q);
        console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        });
        // try {
        //     await getDoc(savedPropertcollection, {
        //       property_id: data.property_id,
        //       user_id: data.user_id,
        //       created: Timestamp.now() 
        //     })
        //     onClose()
        //   } catch (err) {
        //     alert(err)
        //   }
    }

export default {
    ifSavedProperty,
    addSavedProperty
  };