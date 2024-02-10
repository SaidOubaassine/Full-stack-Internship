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


  

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <Button
          title="Try again"
          onPress={loadPost}
          color={"black"}
        />
      </View>
    );
  }
   if (isLoading) {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
}

if (!isLoading && post === undefined) {
  return (
    <View style={styles.centered}>
      <Text>No products found!</Text>
    </View>
  );
}

  return (
    <View>
        <Text>title: {post.title}</Text>
        <Text>body: {post.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item:{
    margin: 20,
    backgroundColor: "green"
  }
});

export default PostDetail;
