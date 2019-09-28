package com.example.assetcalculator;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class AssetsCalc extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_assets_calc);




    }

    public void sum(View view) {
        //get the edit text
        EditText t1= findViewById(R.id.AssetsTxt);
        EditText t2= findViewById(R.id.CashTxt);
        EditText t3= findViewById(R.id.LiabilityTxt);
        TextView answer =  findViewById(R.id.TotalAssets);

        //convert value into int
        int x=Integer.parseInt(t1.getText().toString());
        int y=Integer.parseInt(t2.getText().toString());
        int w=Integer.parseInt(t3.getText().toString());


        //sum these two numbers
        int z=x+y-w;

        //display this text to TextView

        answer.setText("Your Networth is   "+z);
    }
}
