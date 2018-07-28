import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*Angular Material*/
import { MatInputModule, MatDividerModule, MatListModule,
  MatButtonModule, MatTabsModule, MatToolbarModule, MatCardModule } from '@angular/material';

/*Components*/
import { AppComponent } from './app.component';
/*Pipes*/
import { RoundPipe } from './round.pipe';
/*Services*/
import { OscService } from './osc.service';

@NgModule({
  declarations: [
    AppComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [OscService],
  bootstrap: [AppComponent]
})
export class AppModule { }
