package com.api.ems;

import java.util.Arrays;

import org.hibernate.Length;

public class Main {

	public static void main(String[] args) {

		int[] arr = {1,45,7,55,9,3,6};
////		Arrays.sort(arr);
////		System.out.println(arr[arr.length-2]);
//		int a =0;
//		for(int i=0; i<arr.length; i++){
////			a = Math.max(a, arr[i]);
////			if(arr[i]>a) {
////				a = arr[i];
////			}
//		}
//		System.out.println(a);
		
		int a = arr[0];
		int b = arr[1];
		if(b> a ) {
			a =arr[1];
			b=arr[0];
		}
		for(int i=2; i<arr.length; i++) {
			if(arr[i]> a) {
				b = a;
				a=arr[i];
			}else if(arr[i]> b){
				b=arr[i];
			}
		}
		System.out.println(b);
		
	}

}
