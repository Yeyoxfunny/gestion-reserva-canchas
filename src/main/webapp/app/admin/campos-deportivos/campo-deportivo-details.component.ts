import { Component, OnInit } from '@angular/core';
import { CanchaService } from '../../shared/cancha.service';
import { ActivatedRoute } from '@angular/router';
import { Cancha } from '../../shared/cancha.model';

@Component({
   selector: 'app-campo-deportivo-details',
   templateUrl: 'campo-deportivo-details.component.html'
})

export class CampoDeportivoDetailsComponent implements OnInit {

   cancha: Cancha;

   constructor(private canchaService: CanchaService,
            private activatedRoute: ActivatedRoute) { }

   ngOnInit() {
      this.activatedRoute.params.subscribe((params) => {
         const id = params['id'];
         this.canchaService.get(id)
            .subscribe((cancha) => this.cancha = cancha, console.error);
      });
    }
}
