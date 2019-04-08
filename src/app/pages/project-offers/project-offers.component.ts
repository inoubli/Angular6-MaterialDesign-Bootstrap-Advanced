import { Component, OnInit } from '@angular/core';
import { Offer } from '../../shared/offer.model';
import { Router } from '@angular/router';
import { OfferService } from '../../shared/offer.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-offers',
  templateUrl: './project-offers.component.html',
  styleUrls: ['./project-offers.component.scss']
})
export class ProjectOffersComponent implements OnInit {

  offers: Offer[];
  cols: any[];
  selectedOffer: Offer;

  constructor(private router : Router,private activeRoute: ActivatedRoute,private projectService : OfferService, private toastr: ToastrService) {}
  serverErrorMessages: string;

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    // console.log("Got ID param :"+id);

    this.projectService.getProjectOffers(id).subscribe(
     (res :any) => {
        this.offers = res["hydra:member"];
        // console.log(this.offers);
        // this.router.navigateByUrl('/pages/dashboard');
        // this.toastr.success('Vous étes connecté!', 'Connexion');
      },
      err => {
        this.serverErrorMessages = err.error.message;
        console.log(this.serverErrorMessages);
      }
    );

    this.cols = [
      { field: 'period', header: 'Periode' },
      // { field: 'description', header: 'Description' },
      { field: 'status', header: 'Statut' },
      { field: 'filename', header: 'Image' },
      { field: 'published', header: 'Date' },
      { field: 'author', header: 'Auteur' }
  ];



  } // End ngOnInit()

  onRowSelect(offer: any) {
    this.selectedOffer = offer.data;
    console.log(offer.data);
    // this.router.navigateByUrl("/offer-offers/"+ offer.data.id);
  }

}