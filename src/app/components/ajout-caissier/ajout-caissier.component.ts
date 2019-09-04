import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjoutCaissierService } from '../../services/ajout-caissier.service';


@Component({
  selector: 'app-ajout-caissier',
  templateUrl: './ajout-caissier.component.html',
  styleUrls: ['./ajout-caissier.component.css']
})
export class AjoutCaissierComponent implements OnInit {
imageUrl: string = "/assets/Images/user.png";
  fileToUpload: File = null;
  constructor(private ajoutCaissierService : AjoutCaissierService,private router:Router) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    //Show image preview
    var reader=new FileReader();
    
    reader.onload=(event:any)=> {
      this.imageUrl=event.target.result;
    }

    reader.readAsDataURL(this.fileToUpload);
  }

    OnSubmit(username,prenom,nom,image,adresse,email,telephone,password){
   this.ajoutCaissierService .postFile(
     username.value,
     prenom.value,
     nom.value,
     adresse.value,
     email.value,
     telephone.value,
     password.value,
     this.fileToUpload).subscribe(
     data =>{
    prenom        = null; 
    nom           = null;
    adresse       = null;
    username      = null;
    password      = null;
    email         = null;
    telephone     = null;
    image         = null;
    this.imageUrl = "/assets/Images/user.png";
    this.router.navigateByUrl('/listepartenaire');
     }
   );
  }  

}
