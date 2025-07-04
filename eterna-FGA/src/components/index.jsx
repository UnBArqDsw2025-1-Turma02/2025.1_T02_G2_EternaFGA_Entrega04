import React, { useState } from 'react';
import {
  PostContainer,
  PostHeader,
  UserAvatar,
  UserInfo,
  UserName,
  PostTime,
  PostContent,
  PostImage,
  PostActions,
  ActionButton,
  ActionCount,
  PostFooter
} from './styled';

const PostMemoria = ({ 
  userName = "João Silva", 
  userAvatar = "https://via.placeholder.com/40", 
  postTime = "2h",
  content = "Esta é uma memória especial que gostaria de compartilhar com vocês!",
  imageUrl = "https://via.placeholder.com/500x300"
}) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(42);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <PostContainer>
      <PostHeader>
        <UserAvatar src={userAvatar} alt={userName} />
        <UserInfo>
          <UserName>{userName}</UserName>
          <PostTime>{postTime}</PostTime>
        </UserInfo>
      </PostHeader>

      <PostContent>
        {content}
      </PostContent>

      {imageUrl && <PostImage src={imageUrl} alt="Post content" />}

      <PostActions>
        <ActionButton onClick={handleLike} $liked={liked}>
          ❤️ <ActionCount>{likes}</ActionCount>
        </ActionButton>
        <ActionButton>
          💬 <ActionCount>8</ActionCount>
        </ActionButton>
        <ActionButton>
          🔄 <ActionCount>3</ActionCount>
        </ActionButton>
        <ActionButton onClick={handleSave} $saved={saved}>
          {saved ? '🔖' : '📌'}
        </ActionButton>
      </PostActions>

      <PostFooter>
        Curtido por <strong>Maria</strong> e outras <strong>{likes - 1} pessoas</strong>
      </PostFooter>
    </PostContainer>
  );
};

export default PostMemoria;