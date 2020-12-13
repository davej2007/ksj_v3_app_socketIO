import { AbstractControl } from "@angular/forms";

export const getAdminValues = [
    { navBar:'General',     section:[   {button : 0, value:true,  name:'Welcome',       disabled : true}]},
    { navBar:'Operation',   section:[   {button : 1, value:true,  name:'Event Details',  disabled : true},
                                        {button : 2, value:true, name:'Karaoke Event',      disabled : false},
                                        {button : 3, value:true, name:'Message Event',      disabled : false},
                                        {button : 4, value:false, name:'Button 4',      disabled : false},
                                        {button : 5, value:false, name:'Button 5',      disabled : false},
                                        {button : 6, value:true, name:'Reset User Details',      disabled : false}]
                                    },
    { navBar:'Site Admin',  section:[   {button : 7, value:true,  name:'Event Update',           disabled:true},
                                        {button : 8, value:true,  name:'Update Karaoke Song List',          disabled : false},
                                        {button : 9, value:true,  name:'Create Event',                  disabled : false},
                                        {button :10, value:true,  name:'Create New Operator',  disabled : false},
                                        {button :11, value:false,  name:'Button 5',                  disabled : false},
                                        {button :12, value:false,  name:'Button 6',                  disabled : false}]
                                    }]