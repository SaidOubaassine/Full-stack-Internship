import React from "react";
import {
  FlatList,
  Button,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as postsActions from "../store/actions/posts"


function PostDetail(props) {
  const Id = props.route.params.Id;
  const [isLoading, setIsLoading] = useState(false);
  const [onRefreshing, setOnRefreshing] = useState(false);
  const [error, setError] = useState(false);
  const post = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();
  console.log(Id)
  const loadPost = useCallback(async () => {
    setError(null);
    setOnRefreshing(true);
    try {
      await dispatch(postsActions.fetchPost(Id));
    } catch (err) {
      setError(err.message);
    }
    setOnRefreshing(false);
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    loadPost().then(() => setIsLoading(false));
  }, [dispatch, loadPost]);

  return (
    <View>
        <Text>Detail</Text>
        <Button title="click" onPress={()=>{
          console.log(post)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default PostDetail;
