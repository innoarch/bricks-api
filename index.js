var allowedMethods=["get","post","put","delete"];

function DataSwagger() {
    if (!this instanceof Swagger) {
        return new DataSwagger();
    }

    this.allModels={};
    this.appHandler=null;

}
DataSwagger.prototype.setAppHandler=function(app){
    this.appHandler=app;
}

DataSwagger.prototype.resourceListing=function(){

}

DataSwagger.prototype.addGet=DataSwagger.prototype.addGET=function(){
    this.addHandlers("GET",arguments);
    return this;
};

DataSwagger.prototype.addPost=DataSwagger.prototype.addPOST=function(){
    this.addHandlers("POST",arguments);
    return this;
};
DataSwagger.prototype.addPut=DataSwagger.prototype.addUT=function(){
    this.addHandlers("PUT",arguments);
    return this;
};
DataSwagger.prototype.addDelete=DataSwagger.prototype.addDELETE=function(){
    this.addHandlers("DELETE",arguments);
    return this;
};

DataSwagger.prototype.addModels=function(models){
    var self=this;
    if(!self.allModels){
        self.allModels=models;
    }else{

    }
}
DataSwagger.prototype.scan=function(){

}
