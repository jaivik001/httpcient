import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { HttpCilentServicesService } from 'src/app/Sevices/http-cilent-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud-using-http',
  templateUrl: './crud-using-http.component.html',
  styleUrls: ['./crud-using-http.component.css']
})
export class CrudUsingHttpComponent implements OnInit {

  userProfileForm: FormGroup;
  userUpdateForm: FormGroup;
  submitValidateFlag = true;
  modalReference
  modalReference1
  postdata;
  pno:any = 1;
  users:any;
  pageSize:any;
  collectionSize: any;
  closeResult ="";
  id;
  email;
  firstname;
  lastname;
  avatar;
  deletedata;
  index;
  //nbg pagination
  //pageSize = 4;
  
  

  constructor( private _httpCilentServicesService : HttpCilentServicesService ,
    private router : Router ,
    private activetedRoute : ActivatedRoute,
    private modalService: NgbModal,
    private formBuilder : FormBuilder,
    private toastr: ToastrService
    ) {

      this.userProfileForm = this.formBuilder.group({
        name : ['' , Validators.required],
        job : ['' , Validators.required],
      });

      this.userUpdateForm = this.formBuilder.group({
        id : ['' , Validators.required],
        avatar : ['' , Validators.required],
        email: ['' , Validators.required],
        firstname : ['' , Validators.required],
        lastname : ['' , Validators.required],

      });
    
   }

  ngOnInit() { 

    //this.pno = 1
  // ngb pagination
    this.pageSize =6;
    this.refreshPage(this.pno , this.pageSize);

    this.activetedRoute.queryParams.subscribe(params => {
     
      this.pno = params['page'];
      
    });
  }
    

  get d(){
  return this.userProfileForm.controls;
  }
  
  // FOR ngb pagination
  refreshPage(pno:any , pageSize:any) {
  
    //console.log(this.pno)
    this._httpCilentServicesService.getData(pno).subscribe((data:any) => {
      this.users = data;
      this.collectionSize = this.users.total;
      this.router.navigate([''] ,{ queryParams: { page: pno }})
    })
  }

  onCreate(){
    
    //modal.close('Save click')
    if(this.userProfileForm.valid){
      this.modalReference.close();
      
      this.submitValidateFlag = true
      this.successmsg("user created")
      console.log("submit");
      console.log("created....")
      console.log(this.d)
      console.log(this.d['name'].value);
      console.log(this.d['job'].value);
      this._httpCilentServicesService.postData(this.d.name.value , this.d.job.value).subscribe((data:any) => {
        this.postdata = data;
        console.log(this.postdata)
      });

      this.userProfileForm.reset();
      
      
    }
    else{
      console.log("field empty");
      this.submitValidateFlag = false;
      if(this.d.name.value == ''){
        this.errorsmsg("name")
      }else{
        this.errorsmsg('job')
      }
      
    }
   
  }   
  
  open(post) {
    this.modalReference = this.modalService.open(post, {ariaLabelledBy: 'modal-basic-title'});
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult)
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
  onEdit(id,i){
    this.id = id;
    //console.log(this.users.data[i].email);
    this.index = i;
  
    //this.avatar.setProperty(this.users.data[i].avatar);
    console.log(this.avatar);
    this.firstname = this.users.data[i].first_name;
    this.lastname = this.users.data[i].last_name;
    this.email = this.users.data[i].email;
    //this.avatar = this.avatar.setValue(this.users.data[i].avatar)

    
}

  get userUpdateData(){
      return this.userUpdateForm.controls;
  }

  onUpdate(){
    //console.log(this.userUpdateForm.controls)
    //console.log()
    this.modalReference1.close();
    debugger;
    this._httpCilentServicesService.updateData(this.id ,this.userUpdateData ).subscribe((data:any) => {
      debugger;
      this.users = data;
      console.log( 'in update',this.users)
      this.successmsg("user updated")    
      this.refreshPage(2, this.pageSize); 
    });
  }

  opene(edit) {
    this.modalReference1 = this.modalService.open(edit, {ariaLabelledBy: 'modal-basic-title'});
    this.modalReference1.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult)
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
 
  onDelete(id:any){
    this._httpCilentServicesService.deleteData(id).subscribe((data:any) => {
      this.successmsg("user deleted")    
      this.refreshPage(2, this.pageSize); 
      
    });
    

  }
  successmsg(msg){  
    this.toastr.success(msg ,'Success')  

  }
  errorsmsg(e){  
    this.toastr.error("Plz , Enter "+ e ,'Error')
  }


}

