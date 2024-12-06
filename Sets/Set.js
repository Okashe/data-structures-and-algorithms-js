function mySet(){
    let collection = [];

    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    }

    this.values = function(){
        return collection;
    }

    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }
 

    this.size = function(){
        return collection.length;
    }

    this.union = function(otherSet){
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();

        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
           unionSet.add(e)
        });

        return unionSet;
    }

    this.intersection = function(otherSet){
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    this.difference = function(otherSet){
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }
//tests if the set is a subset of a different set
    this.subset = function(otherSet){
        let firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        });
    };
}

let setA = new mySet();
let setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
setB.add("e");
console.log(setA.subset(setB))//false
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

let setC = new Set();
let setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values()); //this returns iterator
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));

