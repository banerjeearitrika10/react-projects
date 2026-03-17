
import {StyleSheet, Text, View ,TextInput, TouchableOpacity,FlatList, Button} from 'react-native';
import { useEffect, useState } from 'react';
import * as SQLite from 'expo-sqlite';

export default function App() {
  const [db,setdb] = useState(); 
  const [task,setTask] = useState();
  const [title,setTitle] = useState("");
  const [modalVisible,setModalVisible] = useState(false);
  useEffect(()=>{
    const initDB =  async () =>{
      const db = await SQLite.openDatabaseAsync('tasks.db');
      setdb(db);
      db.execAsync(`CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        done INT
       );
      `);
       fetchTask(db)
    }
    initDB();
  },[]);

  const fetchTask = async ( database = db )=>{
    if(!database) return;
    const rows = await database.getAllAsync("SELECT * FROM tasks");
    setTask(rows);

  }
  const addTask = async () =>{
    if (!db) return;
    await db.runAsync("INSERT INTO tasks (title,done) VALUES (?, ?)",[title,0]);
    setTitle("");
    fetchTask();
  }

  const toggolTask = async (id,done) => {
    if (!db) return;

    await db.runAsync("UPDATE tasks SET done = ? WHERE id = ?",
      [done ? 0 : 1,
      id]
    );
    fetchTask();
  }
  const updateTask = async (id,title) => {
    if (!db) return;

    await db.runAsync("UPDATE tasks SET title = ? WHERE id = ?",
      [title,
      id]
    );
    fetchTask();
    setModalVisible(false);
  }
  const deleteTask = async (id) => {
    if (!db) return;

    await db.runAsync("DELETE FROM tasks WHERE id = ?",
      [id]
    );
    fetchTask();
  }
  const renderItem = ({item}) =>(
   <View style={styles.taskItem}>
    <TouchableOpacity
    onPress={()=> toggolTask(item.id,item.done)}
    style={{flex:1,borderBottomColor:"gray",borderBottomWidth:1,paddingBottom:20}}
    >
      <Text style={[styles.taskText, item.done ? styles.taskDone : null]}>* {item.title}</Text>
    </TouchableOpacity>

    <View style={{ flexDirection: "row", gap: 10 ,borderBottomColor:"gray",borderBottomWidth:1,paddingBottom:9}}>
    <Button title="update" onPress={() => openEditModal(item)} />
    <Button title="delete" onPress={() => deleteTask(item.id)} />
  </View>
   </View>
  )
  return (
   <View style={styles.container}>
      <Text style={styles.heading}>SQLite Tuitorial</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder = "EnterTask"
          value={title}
          onChangeText={setTitle}
        />
           <Button title="Add" onPress={()=> addTask()}/>
      </View>

      <FlatList
        data = {task}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.empty}>No Task Yet</Text>}
      />
   </View>
  );

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:30,
    paddingTop:100
  },
  heading:{
    fontSize:22,
    marginBottom:20
  },
  inputRow:{
    flexDirection:'row',
    marginBottom:10
  },
  input:{
    flex:1,
    borderColor:"#ccc",
    borderWidth:1,
    marginRight: 10,
    borderRadius:5,
    fontSize:18,
    padding:15
  },
  taskItem:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:8
  },
  taskText:{
    fontSize:18
  },
  taskDone:{
    textDecorationLine:"line-through",
    color:"red"
  },
  empty:{
    textAlign:"center",
    marginTop:20,
    fontSize:16,
    color:"gray"
  }

})


