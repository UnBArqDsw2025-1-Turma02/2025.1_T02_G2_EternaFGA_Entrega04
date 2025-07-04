import styled from 'styled-components';

export const PostContainer = styled.div`
  background: #fff;
  border: 1px solid #e1e8ed;
  border-radius: 12px;
  margin: 16px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  overflow: hidden;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f0f0f0;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const UserName = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
`;

export const PostTime = styled.span`
  font-size: 12px;
  color: #657786;
  margin-top: 2px;
`;

export const PostContent = styled.p`
  margin: 0;
  padding: 0 16px 16px 16px;
  font-size: 15px;
  line-height: 1.5;
  color: #1a1a1a;
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  display: block;
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid #f0f0f0;
  gap: 8px;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  padding: 8px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  color: ${props => {
    if (props.$liked) return '#e91e63';
    if (props.$saved) return '#1976d2';
    return '#657786';
  }};

  &:hover {
    background-color: #f7f9fa;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ActionCount = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

export const PostFooter = styled.div`
  padding: 8px 16px 16px 16px;
  font-size: 13px;
  color: #657786;
  border-top: 1px solid #f0f0f0;
`;