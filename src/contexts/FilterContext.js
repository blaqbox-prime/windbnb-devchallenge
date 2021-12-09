import React, {useContext, useState} from 'react'

const FilterContext = new React.createContext();

export function useFilter(){
    return useContext(FilterContext);  
 }

export default function FilterProvider({children}) {
    const [numChildren, setnumChildren] = useState(0)
    const [stays, setStays] = useState([])
    const [filteredStays, setFilteredStays] = useState([])
    const [numAdults, setnumAdults] = useState(0)
    const [numGuests, setnumGuests] = useState(0)
    const [location, setlocation] = useState()
    const [city, setCity] = useState()
    const [showFilterForm, setShowFilterForm] = useState(false);

    function toggleForm(){
        let show = showFilterForm
        setShowFilterForm(!show);
    }

    function filter(){
        //check city
        if(!city) return; 
        //check if any exits according to filter
        let newStays = stays.filter((stay) => {return stay.city === city && stay.maxGuests >= numGuests})
        if (newStays.length > 0){

            setFilteredStays(newStays);

        }else{

            setFilteredStays([]);
        }
    }

    function reset(){
        if(stays.length == 0){
            fetchStays();
        }else{
            setFilteredStays(stays);
        }
    }

    function fetchStays() {
    
        fetch("/stays.json").then(res => res.json()).then(json => {
          setFilteredStays(json);
          setStays(json)})
      }

    function filterLocation(location){
        setlocation(location);
    }

    function filterCity(city){
        setCity(city);
        setFilteredStays(stays.filter((stay)=> stay.city === city));
    }

    function getLocations(){
        let locations = new Set();
        if(stays !== null && stays.length > 0){
            stays.forEach((stay) => {
                let location = `${stay.city}, ${stay.country}`
                locations.add(location) 
            })
        }

        let locationsArray = [];
        if(locations.size > 0){
            locations.forEach((location) => {
                locationsArray.push(location)
            })
        }

        return locationsArray;
    }


    function guestReducer(type) {
        switch (type) {
            case 'MINUS_CHILDREN' : {
                if(numChildren > 0) {
                    setnumChildren(numChildren-1);
                    setnumGuests(numGuests-1);
                };
                 return;}
            case 'ADD_CHILDREN' : {
                    setnumChildren(numChildren+1);
                    setnumGuests(numGuests+1);
                ;return;}
            case 'MINUS_ADULTS' : {
                if(numAdults > 0) {
                    setnumAdults(numAdults-1);
                    setnumGuests(numGuests-1);
                };return;}
            case 'ADD_ADULTS' : {
                setnumAdults(numAdults+1);
                setnumGuests(numGuests+1);
                return;}     
            default: return;
        }
    }


    const value = {
      numChildren,
      numAdults,
      numGuests,
      location,
      city,
      filteredStays,
      showFilterForm,
      toggleForm,
      guestReducer,
      filterLocation,
      filterCity,
      getLocations,
      fetchStays,
      filter,
      reset
    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}
