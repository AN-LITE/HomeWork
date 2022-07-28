

 export class Model{

    constructor(){
        this.formId = 'todoForm'

    }

    setData(inputData){

        const savedData = this.data;

        const oldData = savedData ? savedData : [];

        if(!savedData){
            inputData.id = 1;
        }else {
            inputData.id = oldData[oldData.length-1].id +1
        }
        oldData.push(inputData);

        localStorage.setItem(this.formId, JSON.stringify(oldData));

    }
   
    get data(){
        return JSON.parse(localStorage.getItem(this.formId));
    }



    
}