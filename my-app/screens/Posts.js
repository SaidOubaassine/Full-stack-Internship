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

function Posts() {
  const [isLoading, setIsLoading] = useState(false);
  const [onRefreshing, setOnRefreshing] = useState(false);
  const [error, setError] = useState(false);
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  
  



  return (
    <View>
      <Button title="Click" onPress={async ()=>{
      await dispatch(postsActions.fetchPosts());
      console.log(posts)
    }}>
    </Button>
    </View>
  );
}

export default Posts;
