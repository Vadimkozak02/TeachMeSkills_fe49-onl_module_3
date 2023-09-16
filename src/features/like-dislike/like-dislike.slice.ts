import { createSlice } from "@reduxjs/toolkit";
import { mokieApi } from "../../mokie.api";

type Payload = {
    postId: number;
}

type Rating = {
    likes:number, 
    dislikes:number, 
    userChoice: 'like' | 'dislike' | null
}

const likeDislike = createSlice({
    name: 'likeDislike',
    initialState: {
        1: {
            likes: 15,
            dislikes: 3,
            userChoice: 'like',
        },
        2: {
            likes: 27,
            dislikes: 2,
            userChoice: 'dislike',
        }, 
        3: {
            likes: 17,
            dislikes: 1,
            userChoice: null,
        },
        4: {
            likes: 11,
            dislikes: 3,
            userChoice: null,
        },
        5: {
            likes: 6,
            dislikes: 2,
            userChoice: null,
        },
        6: {
            likes: 8,
            dislikes: 1,
            userChoice: null,
        },
        7: {
            likes: 15,
            dislikes: 3,
            userChoice: null,
        },
        8: {
            likes: 22,
            dislikes: 1,
            userChoice: null,
        },
        9: {
            likes: 16,
            dislikes: 2,
            userChoice: null,
        },
        10: {
            likes: 20,
            dislikes: 1,
            userChoice: null,
        },
        11: {
            likes: 18,
            dislikes: 2,
            userChoice: null,
        },
        12: {
            likes: 25,
            dislikes: 3,
            userChoice: null,
        },
        13: {
            likes: 11,
            dislikes: 1,
            userChoice: null,
        }
    } as Record<number, Rating>,
    reducers: {
        setActiveLike(state, action: {payload: Payload}){
            const data = state[action.payload.postId];
            if (!data) return;
            data.likes++
            if (data.userChoice === 'dislike') {
                data.dislikes--
            }
            data.userChoice = 'like';
        },
        isActive(state, action: {payload: Payload}){
            const data = state[action.payload.postId];
            if(!data) return;
            data.likes--
            if (data.userChoice === 'like') {
                data.likes--
            }
            data.userChoice = null;
        },
        setActiveDislike(state, action: {payload: Payload}){
            const data = state[action.payload.postId];
            if (!data) return;
            data.dislikes++
            if (data.userChoice === 'like') {
                data.likes--
            }
            data.userChoice = 'dislike';
        }
    }
});

export const {
    actions: {setActiveLike, isActive, setActiveDislike}, 
    reducer: likeDislikeReducer, 
} = likeDislike;