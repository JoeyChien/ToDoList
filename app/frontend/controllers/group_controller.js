import { Controller } from "stimulus"
import Rails from "@rails/ujs"

export default class extends Controller {
  static targets = [ "group_id" ]

  openModal(e) {   
    e.preventDefault();   
    $('#createModal').modal('show');
  }

  
  edit(e) {
    e.preventDefault(); 
    let group_id = this.group_idTarget.value;
    Rails.ajax({
      url: `/groups/${group_id}/edit`,
      type: 'POST', 
      success: resp => {
        console.log("resp.msg");
      },
      error: err => {
        console.log("resp");
      }
    })
  }

  create(e) {
    e.preventDefault(); 

    this.on('ajax:success', function(e, data, status, xhr){
      $('#reportalert').text('Done.');
    }).on('ajax:error',function(e, xhr, status, error){
      $('#reportalert').text('Failed.');
    });
    // Rails.ajax({
    //   // url: "/groups",
    //   // type: 'POST',
    //   // data: "",
    //   success: resp => {
    //     console.log(resp.msg);
    //   },
    //   error: err => {
    //     console.log(resp);
    //   }
    // })
  }
}