import React from 'react';
import { Text, View, Switch, Button } from 'react-native';

const textBox = {
    fontSize: 50,
};

const complete = {
    color: 'blue',
};

const incomplete = {
    color: 'red',
};

/*

<div className={props.isComplete ? 'complete' : 'incomplete'}>
            {props.name ? <p>{props.name}</p> : ''}
            {props.description ? <p>{props.description}</p> : ''}
            {props.date ? (
                <p>{new Date(props.date).toLocaleDateString()}</p>
            ) : (
                ''
            )}
            {props.priority ? <p>Priority: {props.priority}</p> : ''}
            <label>
                Is Complete?
                <input
                    type='checkbox'
                    checked={props.isComplete}
                    onChange={e => {
                        props.toggle(props.id, props.isComplete);
                    }}
                ></input>
            </label>
            <button
                onClick={e => {
                    props.edit(props);
                }}
            >
                Edit
            </button>
            <button
                onClick={e => {
                    props.delete(props.id);
                }}
            >
                Delete
            </button>
        </div>

*/

function Task(props) {
    let taskStyle = {
        backgroundColor: props.isComplete ? '#dbf4ff' : '#ffdbe0',
    };
    let taskTextStyle = {
        color: props.isComplete ? 'blue' : 'red',
        fontSize: 30,
    };

    return (
        <View style={taskStyle}>
            {props.name ? (
                <Text style={taskTextStyle}>{props.name}</Text>
            ) : null}
            {props.description ? (
                <Text style={taskTextStyle}>{props.description}</Text>
            ) : null}
            {props.date ? (
                <Text style={taskTextStyle}>
                    {new Date(props.date).toLocaleDateString()}
                </Text>
            ) : null}
            {props.priority ? (
                <Text style={taskTextStyle}>Priority: {props.priority}</Text>
            ) : null}

            <Text style={taskTextStyle}>Is Complete?</Text>
            <Switch
                value={props.isComplete}
                onChange={e => {
                    props.toggle(props.id, props.isComplete);
                }}
            />

            <Button
                title='Edit'
                onPress={e => {
                    props.edit(props);
                }}
            />
            <Button
                title='Delete'
                onPress={e => {
                    props.delete(props.id);
                }}
            />
        </View>
    );
}

export default Task;
