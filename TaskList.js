import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, Button, Image } from 'react-native';
import Task from './Task';
import PlatformIndicator from './PlatformIndicator';
import TaskEdit from './TaskEdit';
import TaskAdd from './TaskAdd';
import {
    toggleTaskComplete,
    editTask,
    deleteTask,
    addTask,
} from './store/taskReducer';
import * as ImagePicker from 'expo-image-picker';

function TaskList(props) {
    let [edit, setEdit] = useState(null);
    let taskObjects = [];

    let [image, setImage] = useState('');

    const launchEditTask = data => {
        setEdit(
            <TaskEdit
                close={() => {
                    setEdit('');
                }}
                edit={data => {
                    props.dispatch(editTask(data));
                }}
                task={data}
            />,
        );
    };

    for (let i = 0; i < props.tasks.length; i++) {
        taskObjects.push(
            <Task
                key={i}
                id={props.tasks[i]._id}
                name={props.tasks[i].name}
                description={props.tasks[i].description}
                priority={props.tasks[i].priority}
                date={props.tasks[i].dateDue}
                isComplete={props.tasks[i].isCompleted}
                edit={launchEditTask}
                toggle={(id, current) => {
                    props.dispatch(toggleTaskComplete(id, current));
                }}
                delete={id => {
                    props.dispatch(deleteTask(id));
                }}
            />,
        );
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    console.log(image);

    return (
        <View>
            <PlatformIndicator />
            <Button title='Pick an Image' onPress={pickImage} />
            {image ? (
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: image }}
                />
            ) : null}
            <View>{taskObjects}</View>
            <View>{edit}</View>
            <TaskAdd
                add={data => {
                    props.dispatch(addTask(data));
                }}
            />
        </View>
    );
}

const mSTP = state => ({
    tasks: state.task.tasks,
});

export default connect(mSTP)(TaskList);
