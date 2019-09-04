import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjoutPartenaireService } from 'src/app/services/ajout-partenaire.service';

@Component({
  selector: 'app-ajout-partenaire',
  templateUrl: './ajout-partenaire.component.html',
  styleUrls: ['./ajout-partenaire.component.css']
})
export class AjoutPartenaireComponent implements OnInit {
imageUrl: string = "/assets/Images/user.png";
  fileToUpload: File = null;
  constructor(private ajoutpartService : AjoutPartenaireService,private router:Router) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    
    reader.onload=(event:any)=> {this.imageUrl=event.target.result}
    reader.readAsDataURL(this.fileToUpload);
  }

    OnSubmit(username,prenom,nom,image,adresse,email,telephone,raisonSociale,ninea,password){
   this.ajoutpartService.postFile(
     username.value,
     prenom.value,
     nom.value,
     adresse.value,
     email.value,
     telephone.value,
     raisonSociale.value,
     ninea.value,
     password.value,
     this.fileToUpload).subscribe(
     data =>{
    prenom        = null; 
    nom           = null;
    adresse       = null;
    username      = null;
    password      = null;
    email         = null;
    raisonSociale = null;
    ninea         = null;
    telephone     = null;
    image         = null;
    this.imageUrl = "/assets/Images/user.png";
    this.router.navigateByUrl('/ListePartenaire');
     }
   );
  }   
}
