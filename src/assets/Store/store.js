import axios from "axios";
import { createStore } from "vuex";


const store=createStore({
    state:{
arr:[],
cartayazilmaliolan:'',
cartdaki:[]
    },
    getters:{
datanialgetirekrana(state){
    return state.arr
}
,
cartdakinial(state){
    return state.cartdaki
}
    },
    mutations:{

    },
    actions:{
        mehsulual({state,commit},payload){
           axios.get('https://login-5f77c-default-rtdb.firebaseio.com/productadd.json').then(({data})=>{

           for(let key in data){
            data[key].id=[key]
           }
            
           state.arr.push(data)
           })
        },
        cartagonderstore({state,commit},payload){
axios.get(`https://login-5f77c-default-rtdb.firebaseio.com/productadd/${payload}.json`).then(({data})=>{
    state.cartayazilmaliolan=data
    console.log(data);
})

setTimeout(()=>{
    axios.post(`https://login-5f77c-default-rtdb.firebaseio.com/cartadd.json`,state.cartayazilmaliolan).then(({data})=>{
    console.log(data);
        axios.get(`https://login-5f77c-default-rtdb.firebaseio.com/cartadd.json`).then(({data})=>{

            for(let key in data){
                data[key].id=[key]
               }

            state.cartdaki=data
        })
  
})
},600)







        }
,
        mehsulucartayaz({state,commit},payload){
            axios.get(`https://login-5f77c-default-rtdb.firebaseio.com/cartadd.json`).then(({data})=>{
                

                for(let key in data){
                    data[key].id=[key]
                   }
             
    state.cartdaki=data
})
        }
        ,
        cartdansil({state,commit},payload){
            console.log(payload);
axios.delete(`https://login-5f77c-default-rtdb.firebaseio.com/cartadd/${payload}.json`).then((response)=>{
    console.log(response);

    axios.get(`https://login-5f77c-default-rtdb.firebaseio.com/cartadd.json`).then(({data})=>{

        for(let key in data){
            data[key].id=[key]
           }

        state.cartdaki=data
    })

    

})
        }

    }
    
})

export default store